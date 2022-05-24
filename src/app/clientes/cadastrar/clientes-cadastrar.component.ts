/**
 * Componente de cadastro de clientess.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

import { Clientes, ClientesService } from '../shared';

@Component({
	selector: 'kz-clientes-cadastrar',
	templateUrl: './clientes-cadastrar.component.html',
	styleUrls: ['./clientes-cadastrar.component.css']
})
export class ClientesCadastrarComponent implements OnInit {

	private clientes: Clientes;

	/**
	 * Construtor.
	 *
	 * @param Router router
	 * @param ClientesService clientesService
	 */
	constructor(
		private router: Router, 
		private clientesService: ClientesService) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.clientes = new Clientes();
	}

	/**
	 * Método responsável por cadastrar um novo clientes.
	 */
	cadastrar() {
		this.clientes.id = new Date().getTime();
		this.clientesService.cadastrar(this.clientes);
		this.router.navigate(['/clientess']);
	}
}