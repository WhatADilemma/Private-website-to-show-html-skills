document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ DOM fully loaded, script is running...");

    const dropdownButton = document.querySelector(".dropbtn");
    console.log("🔍 Dropdown button found:", dropdownButton);


    const dropdownMenu = document.querySelector(".dropdown-content");
    console.log("🔍 Dropdown menu found:", dropdownMenu);

    if (!dropdownButton || !dropdownMenu) {
        console.error("❌ Dropdown button or menu not found. Check your HTML.");
        return; // Stop script if elements are missing
    }

    dropdownButton.addEventListener("click", function (event) {
        console.log("👆 Click detected on dropdown button");
        dropdownMenu.classList.toggle("show");
        console.log("📂 Dropdown menu toggled. Current class list:", dropdownMenu.classList);
        
		
        event.stopPropagation();
    });


    window.addEventListener("click", function (event) {
        console.log("🌍 Click detected somewhere on the page");

        if (!event.target.matches(".dropbtn")) {
            console.log("🚪 Click was **outside** dropdown, closing it.");
            dropdownMenu.classList.remove("show");
        } else {
            console.log("✅ Click was **on** dropdown button, keeping it open.");
        }
    });

    console.log("🎉 Script finished setting up event listeners!");
});