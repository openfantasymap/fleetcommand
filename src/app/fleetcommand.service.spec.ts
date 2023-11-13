import { TestBed } from '@angular/core/testing';

import { FleetcommandService } from './fleetcommand.service';

describe('FleetcommandService', () => {
  let service: FleetcommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetcommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
