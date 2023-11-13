import { TestBed } from '@angular/core/testing';

import { QInterceptorService } from './qinterceptor.service';

describe('QInterceptorService', () => {
  let service: QInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
