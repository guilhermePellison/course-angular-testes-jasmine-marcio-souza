/**
 * Componente de edição de clientes.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

import { Clientes, ClientesService } from '../shared';

@Component({
	selector: 'kz-clientes-editar',
	templateUrl: './clientes-editar.component.html',
	styleUrls: ['./clientes-editar.component.css']
})
export class ClientesEditarComponent implements OnInit {

	private id: number;
	private clientes: Clientes;

	/**
	 * Construtor.
	 *
	 * @param ActivatedRoute route
	 * @param Router router
	 * @param ClientesService clientesService
	 */
	constructor(
		private route: ActivatedRoute, 
		private router: Router, 
		private clientesService: ClientesService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.id = +this.route.snapshot.params['id'];
		this.clientes = this.clientesService.buscarPorId(this.id);
	}

	/**
	 * Método responsável por atualizar os dados de um clientes.
	 */
	atualizar() {
		this.clientesService.atualizar(this.id, this.clientes);
		this.router.navigate(['/clientess']);
	}
}