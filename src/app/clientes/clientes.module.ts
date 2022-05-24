/**
 * Arquivo de configuração do módulo.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
	ClientesCadastrarComponent,
	ClientesEditarComponent,
	ClientesListarComponent,
	ClientesVisualizarComponent,
	ClientesService
} from './';

import { SharedModule } from '../shared';

@NgModule({
	imports: [ 
		RouterModule,
		SharedModule
	],
	declarations: [
		ClientesCadastrarComponent,
		ClientesEditarComponent,
		ClientesListarComponent,
		ClientesVisualizarComponent
	],
	providers: [
		ClientesService
	]
})
export class ClientesModule {}
