import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.addEventListener('resize', this.hideSidebar);
	}

	rotateArrow(name:string) {
		if(document.getElementsByName(name)[0].style.transform == "rotate(180deg)") {
			document.getElementsByName(name)[0].style.transform = "rotate(0deg)";
		} else {
			document.getElementsByName(name)[0].style.transform = "rotate(180deg)";
		}
	}

	toggleSidebar() {
		if(document.getElementById("sidebar").style.left == '0px') {
			document.getElementById("sidebar").style.left = '-260px';
		} else {
			document.getElementById("sidebar").style.left = '0px';
		}
	}

	hideSidebar() {
		if ($(window).width() < 991) {
			document.getElementById("sidebar").style.left = '-260px';
		}
	}

}
