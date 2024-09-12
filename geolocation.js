const strain_names = {
  stolo_haze: {
    default: "Stó:lō Haze",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },

  tropic_thunder: {
    default: "Tropic Thunder",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },

  cherry_gas: {
    default: "Cherry Gas",
    canada: "",
    israel: "Mac Doughnut",
    europe: "Mac Doughnut",
    australia: "",
  },

  modified_grapes: {
    default: "Modified Grapes",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },

  mac_daddy: {
    default: "Mac Daddy",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },

  lemon_tartz: {
    default: "Lemon Tartz",
    canada: "",
    israel: "",
    europe: "Pineapple Express",
    australia: "",
  },

  peanut_butter_breath: {
    default: "Peanut Butter Breath",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },

  gush_mintz: {
    default: "Gush Mintz",
    canada: "",
    israel: "",
    europe: "",
    australia: "",
  },
};


async function getCountryRegionKey() {
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country;

        if (data.country_name === 'Australia') {
            return 'australia';
        } else if (data.country_name === 'Canada') {
            return 'canada';
        } else if (data.country_name === 'Israel') {
            return 'israel'; // Corrected typo
        } else if (['AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'].includes(countryCode)) {
            return 'europe';
        } else {
            return ''; // Default case if country does not match any specified regions
        }
    } catch (error) {
        console.error('Error fetching user location:', error);
        return ''; // Return an empty string or a default value in case of an error
    }
}



getCountryRegionKey().then(regionKey => {
    if (regionKey) {
        console.log(regionKey);
    } else {
        // Handle case where no specific region is identified, maybe set a default
        console.log('No specific region identified, using default settings.');
    }
});