import { TestBed } from '@angular/core/testing';

import { GeneralChartsService } from './general-charts.service';

describe('GeneralChartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralChartsService = TestBed.get(GeneralChartsService);
    expect(service).toBeTruthy();
  });
});
