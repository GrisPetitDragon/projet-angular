import { TestBed } from '@angular/core/testing';

import { WaypointService } from './waypoint.service';
import { HttpClientModule } from '@angular/common/http';

describe('WaypointService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: WaypointService = TestBed.get(WaypointService);
    expect(service).toBeTruthy();
  });
});
