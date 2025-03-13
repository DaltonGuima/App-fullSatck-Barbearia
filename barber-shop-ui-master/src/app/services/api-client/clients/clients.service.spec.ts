import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClientsService } from './clients.service';

describe('ClientsService', () => {
  let service: ClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientsService]
    });
    service = TestBed.inject(ClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

// Adicionado ClientsService aos providers no TestBed.configureTestingModule para garantir que o serviço seja fornecido corretamente.