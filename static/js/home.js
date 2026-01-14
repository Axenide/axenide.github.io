/* Constants and DOM Elements =============================================== */

const lastFmUser = "Axenide";
const lastFmApiKey = "c7dd5b1223dbbb3fbcc818f987529bf2"; // <--- I don't care.
const lastFmPlayer = document.getElementById("player");
const lastFmCover = document.getElementById("cover");
const lastFmTitle = document.getElementById("player-title");
const lastFmTitleContainer = document.getElementById("player-title-container");
const lastFmArtist = document.getElementById("player-artist");
const lastFmArtistContainer = document.getElementById("player-artist-container");
const lastFmLink = document.getElementById("player-go");

const discordStatus = document.getElementById("online-indicator");
const discordStatusText = document.getElementById("online-indicator-text");
const clock = document.getElementById("clock");

// Axenide's Discord ID from config.toml
const discordUserId = "294856304969908224";

let lastTrackID = null;
let lastDiscordStatus = "";
let lastTime = "";

/* Functions ================================================================ */

// Last.fm
async function fetchLastFm() {
	if (lastFmUser === "LASTFMUSER" || lastFmApiKey === "LASTFMAPIKEY") {
		console.warn("Last.fm user or API key not set.");
		return;
	}

	try {
		const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastFmUser}&api_key=${lastFmApiKey}&format=json&limit=1`);
		const data = await res.json();
		const track = data.recenttracks?.track?.[0];
		if (!track) return;

		const trackID = track.mbid || track.url;
		const isPlaying = track["@attr"]?.nowplaying === "true";

		if (trackID !== lastTrackID || isPlaying !== lastFmPlayer.classList.contains("playing")) {
			lastTrackID = trackID;

			lastFmTitle.textContent = track.name;
			lastFmArtist.textContent = track.artist["#text"];
			// Handle image size, prefer medium
			lastFmCover.src = track.image.find(img => img.size === "medium")?.["#text"] || "/images/image-missing.svg";
			lastFmLink.href = track.url;

			lastFmPlayer.classList.toggle("playing", isPlaying);

			// Call updateMarquees if it exists (from marquee.js)
			if (typeof updateMarquees === 'function') {
				updateMarquees();
			}
		}
	} catch (e) {
		console.error("Failed to fetch now playing track:", e);
	}
}

// Discord status
async function fetchDiscordStatus() {
	if (!discordStatus || !discordStatusText) return;

	try {
		const res = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
		const data = await res.json();
		// Lanyard returns data.data if successful
		if (!data.success) throw new Error(data.error?.message || "Lanyard error");
		
		const status = data.data.discord_status;

		if (status !== lastDiscordStatus) {
			lastDiscordStatus = status;

			discordStatus.classList.remove("online", "idle", "dnd", "offline");
			discordStatus.classList.add(status);

			switch (status) {
				case "online":
					discordStatusText.innerHTML = "Online";
					break;
				case "idle":
					discordStatusText.innerHTML = "Idle";
					break;
				case "dnd":
					discordStatusText.innerHTML = "DND";
					break;
				case "offline":
					discordStatusText.innerHTML = "Offline";
					break;
				default:
					discordStatusText.innerHTML = status;
			}
		}
	} catch (error) {
		console.error("Error fetching Lanyard data:", error);
		discordStatusText.innerHTML = "N/A";
	}
}

// Clock
function updateClock() {
	if (!clock) return;

	const options = {
		timeZone: "America/Argentina/Mendoza",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false,
	};

	const localTime = new Date().toLocaleString("en-IE", options);

	if (localTime !== lastTime) {
		clock.textContent = localTime;
		lastTime = localTime;
	}
}

// Scroll Snap Logic
function initScrollSnap() {
	const moreSection = document.getElementById("more");
	if (!moreSection) return;

	let isSnapScrolling = false;

	window.addEventListener("wheel", (e) => {
		if (isSnapScrolling) return;

		const currentScroll = window.scrollY;
		// 3.75rem approx 60px, fetching from CSS is safer
		const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 60;
		const targetTop = moreSection.offsetTop - scrollPadding;
		const tolerance = 50;

		// 1. From Top -> Down to Content
		// Trigger if we are close to the top (Hero section)
		if (e.deltaY > 0 && currentScroll < 100) {
			e.preventDefault();
			isSnapScrolling = true;
			moreSection.scrollIntoView({ behavior: "smooth" });
			setTimeout(() => { isSnapScrolling = false; }, 800);
		}
		
		// 2. From Content Top -> Up to Hero
		// Trigger if we are aligned with the content top
		else if (e.deltaY < 0 && Math.abs(currentScroll - targetTop) < tolerance) {
			e.preventDefault();
			isSnapScrolling = true;
			window.scrollTo({ top: 0, behavior: "smooth" });
			setTimeout(() => { isSnapScrolling = false; }, 800);
		}
	}, { passive: false });
}

/* Initialization and Event Listeners ======================================= */

document.addEventListener("DOMContentLoaded", function () {
	initScrollSnap();

	if (lastFmPlayer) {
		fetchLastFm();
		setInterval(fetchLastFm, 10000);
	}

	if (clock) {
		updateClock();
		setInterval(updateClock, 1000);
	}

	if (discordStatus) {
		fetchDiscordStatus();
		setInterval(fetchDiscordStatus, 10000);
	}
});
