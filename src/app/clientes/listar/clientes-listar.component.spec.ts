/**
 * Arquivo de teste do componente ClientesListarComponent.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ClientesListarComponent } from './';
import { ClientesService } from '../';
import { 
	ModalUtilComponent, 
	KzPaginacaoComponent,
	RouterLinkStubDirective,
	ActivatedRouteStub
} from '../../';

describe('ClientesListar', () => {

  let fixture: ComponentFixture<ClientesListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	declarations: [ 
    		ClientesListarComponent,
    		ModalUtilComponent,
    		KzPaginacaoComponent,
    		RouterLinkStubDirective
    	],
    	providers:    [
    	  ClientesService,
    	  { 
    	  	provide: ActivatedRoute, 
    	  	useValue: new ActivatedRouteStub() 
    	  }
    	]
    });

    fixture = TestBed.createComponent(ClientesListarComponent);
  });

  it('deve garantir que o componente tenha sido criado', () => {
    expect(fixture).toBeDefined();
  });
  
});
