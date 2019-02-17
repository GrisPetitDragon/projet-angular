import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ChapterService } from './chapter.service';

describe('ChapterService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  imports: [HttpClientModule]}));

  it('should be created', () => {
    const service: ChapterService = TestBed.get(ChapterService);
    expect(service).toBeTruthy();
  });
});
