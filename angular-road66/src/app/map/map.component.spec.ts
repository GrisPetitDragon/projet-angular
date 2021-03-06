import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map.component';
import { HttpClientModule } from '@angular/common/http';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LeafletModule,
        HttpClientModule
      ],
      declarations: [MapComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a map', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(document.getElementById('map')).toBeTruthy();
  });
});
