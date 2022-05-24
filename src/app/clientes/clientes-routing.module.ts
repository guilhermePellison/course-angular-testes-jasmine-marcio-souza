/**
 * Arquivo de configuração de rotas.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Routes } from '@angular/router'; 

import { 
	ClientesListarComponent,
	ClientesCadastrarComponent,
	ClientesEditarComponent,
	ClientesVisualizarComponent
} from './';

export const ClientesRoutes: Routes = [
	{ path: 'clientess', redirectTo: 'clientess/listar' },
	{ path: 'clientess/listar', component: ClientesListarComponent }, 
	{ path: 'clientess/cadastrar', component: ClientesCadastrarComponent }, 
	{ path: 'clientess/editar/:id', component: ClientesEditarComponent },
	{ path: 'clientess/visualizar/:id', component: ClientesVisualizarComponent }
];
