/**
 * Arquivo de teste do componente ClientesVisualizarComponent.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ClientesVisualizarComponent } from './';
import { ClientesService } from '../';
import { 
	RouterLinkStubDirective,
	ActivatedRouteStub
} from '../../';

describe('ClientesVisualizar', () => {

  let fixture: ComponentFixture<ClientesVisualizarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	declarations: [ 
    		ClientesVisualizarComponent,
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

    fixture = TestBed.createComponent(ClientesVisualizarComponent);
  });

  it('deve garantir que o componente tenha sido criado', () => {
    expect(fixture).toBeDefined();
  });
  
});
