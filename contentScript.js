// Function to remove advertisement elements
function removeAds() {
    // First ad - Sidebar container
    const ad1 = document.querySelector('.s11cbqai');
    if (ad1) {
        const sidebarAd = ad1.querySelector('#targetDiv-SidebarAdsContainer');
        if (sidebarAd) {
            sidebarAd.remove();
        }
    }

    // Second ad - Full screen mode
    const ad2 = document.querySelector('.c1y04zgv');
    if (ad2) {
        const ad = ad2.querySelector('.a1md05wj');
        if (ad) {
            ad.remove();
        }
    }

    // Third ad - Above the footer
    const ad3 = document.querySelector('.SetPageEmbeddedAd-wrapper');
    if (ad3) {
        ad3.remove();
    }

    // Fourth ad - Above the footer
    const ad4 = document.querySelector('.fuq537y');
    if (ad4) {
        const ad = ad4.querySelector('.TimeAndVisibilityAd');
        if (ad) {
            ad.remove();
        }
    }
}

// Run when page loads
removeAds();

// Use MutationObserver for dynamic content
const observer = new MutationObserver(() => {
    removeAds();
});

// Observe all DOM changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});