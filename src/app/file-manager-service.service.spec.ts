import { TestBed } from '@angular/core/testing';

import { FileManagerServiceService } from './file-manager-service.service';

describe('FileManagerServiceService', () => {
  let service: FileManagerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileManagerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
