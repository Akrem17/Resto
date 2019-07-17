import { TestBed } from '@angular/core/testing';

import { DishServicesService } from './dish-services.service';

describe('DishServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DishServicesService = TestBed.get(DishServicesService);
    expect(service).toBeTruthy();
  });
});
