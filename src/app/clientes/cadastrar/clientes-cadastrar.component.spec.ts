/**
 * Arquivo de teste do componente ClientesCadastrarComponent.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientesCadastrarComponent } from './';
import { ClientesService } from '../';
import { 
	RouterLinkStubDirective,
	ActivatedRouteStub,
	RouterStubService
} from '../../';

describe('ClientesCadastrar', () => {

  let fixture: ComponentFixture<ClientesCadastrarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ 
    	imports: [
    		FormsModule
    	],
    	declarations: [ 
    		ClientesCadastrarComponent,
    		RouterLinkStubDirective
    	],
    	providers:    [
    	  ClientesService,
    	  { 
    	  	provide: ActivatedRoute, 
    	  	useValue: new ActivatedRouteStub() 
    	  },
    	  {
    	  	provide: Router,
    	  	useValue: new RouterStubService()
    	  }
    	]
    });

    fixture = TestBed.createComponent(ClientesCadastrarComponent);
  });

  it('deve garantir que o componente tenha sido criado', () => {
    expect(fixture).toBeDefined();
  });
  
});
