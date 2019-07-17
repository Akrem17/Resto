import { TestBed } from '@angular/core/testing';

import { PromotionDishService } from './promotion-dish.service';

describe('PromotionDishService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionDishService = TestBed.get(PromotionDishService);
    expect(service).toBeTruthy();
  });
});
