initWhatsappSidebarHide();


function initWhatsappSidebarHide() {

	document.querySelector("body").innerHTML += `
	<div id="plugin-toggle-sidebar-button" style="position:absolute;left:80px;top:0px;background-color: #ffffffd1;z-index: 10000;padding: 5px;border-radius: 0px 0px 20px 20px;cursor:pointer;color:black;font-size:150%">
		👀
	</div>
	`

	let pluginToggleSidebarIsShown = true;

	document.querySelector("#plugin-toggle-sidebar-button").addEventListener("click", function () {
		pluginToggleSidebarIsShown = !pluginToggleSidebarIsShown;
		document.querySelector("#side").style.display =
			pluginToggleSidebarIsShown ? "block" : "none";
	});
}