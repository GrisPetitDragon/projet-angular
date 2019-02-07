import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { VideoComponent } from "./video/video.component";

var fixture;

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent,
				VideoComponent
			],
		}).compileComponents();

		fixture = TestBed.createComponent(AppComponent);
	}));

	it('should create the app', () => {
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'angular-road66'`, () => {
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('angular-road66');
	});

	it('should render title in a h1 tag', () => {
		fixture.detectChanges();
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-road66!');
	});

	it('should contain a video tag', () => {
		const compiled = fixture.debugElement.nativeElement;
		expect(compiled.querySelector("video")).toBeTruthy();
	});

	it('video should have all sources', () => {
		const compiled = fixture.debugElement.nativeElement;
		const sources = compiled.querySelector("video").querySelectorAll("source");
		sources.forEach(function (currentValue, currentIndex, listObj) {
			expect(currentValue.type).toMatch(/video\/mp4|video\/ogg/);
		});
	});
});
