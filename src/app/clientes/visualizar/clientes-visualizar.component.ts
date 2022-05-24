/**
 * Componente de visualização de clientes.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Clientes, ClientesService } from '../shared';

@Component({
	selector: 'kz-clientes-visualizar',
	templateUrl: './clientes-visualizar.component.html',
	styleUrls: ['./clientes-visualizar.component.css']
})
export class ClientesVisualizarComponent implements OnInit {

	private id: number;
	private clientes: Clientes;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param ClientesService clientesService
	 */
	constructor(
		private route: ActivatedRoute, 
		private clientesService: ClientesService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.clientes = this.clientesService.buscarPorId(this.id);
	}
}