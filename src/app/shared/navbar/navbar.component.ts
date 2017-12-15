import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';

declare const $: any;

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	
	private routeData;
	title: string = "";

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.subscribe((data) => {
			if (data instanceof RoutesRecognized) {
			  this.routeData = data.state.root.firstChild.data;
			  this.title = this.routeData.title;
			}
		});

		window.onresize = this.hideOverlay;
	}

	@Output() myEvent = new EventEmitter();
	openSidebar() {
		this.myEvent.emit(null);
		document.getElementById('overlay').style.display = 'block';
	}

	closeSidebar() {
		this.myEvent.emit(null);
		document.getElementById('overlay').style.display = 'none';
	}

	hideOverlay() {
		document.getElementById('overlay').style.display = 'none';
	}
}
