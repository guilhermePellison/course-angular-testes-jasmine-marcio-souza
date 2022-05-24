/**
 * Componente de listagem de clientess.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Clientes, ClientesService } from '../shared';
import { KzPaginacaoComponent } from '../../shared';

@Component({
	selector: 'kz-clientes-listar',
	templateUrl: './clientes-listar.component.html',
	styleUrls: ['./clientes-listar.component.css']
})
export class ClientesListarComponent implements OnInit {

	private clientess: Clientes[];
	private idExcluir: number;
	private pagina: number;
	private totalRegistros: number;

	/**
	 * Construtor.
	 *
	 * @param ClientesService clientesService
	 */
	constructor(private clientesService: ClientesService,
		private route: ActivatedRoute) {
	}

	/**
	 * Método executado logo após a criação do componente.
	 */
	ngOnInit() {
		this.totalRegistros = this.clientesService.totalRegistros();
		this.pagina = +this.route.snapshot.queryParams['pagina'] || KzPaginacaoComponent.PAG_PADRAO;
		this.clientess = this.clientesService.listarParcial(
			--this.pagina, KzPaginacaoComponent.TOTAL_PAGS_PADRAO);
	}

	/**
	 * Método responsável por armazenar o id do clientes a 
	 * removido.
	 *
	 * @param number id
	 */
	excluir(id: number) {
 		this.idExcluir = id;
 	}

 	/**
	 * Método responsável por remover um clientes.
	 */
 	onExcluir() {
 		this.clientesService.excluir(this.idExcluir);
 		location.reload();
 	}

 	/**
 	 * Método responsável pela paginação.
 	 *
 	 * @param any $event Número da página atual.
 	 */
 	paginar($event: any) {
		this.pagina = $event - 1;
		this.totalRegistros = this.clientesService.totalRegistros();
		this.clientess = this.clientesService.listarParcial(
			this.pagina, KzPaginacaoComponent.TOTAL_PAGS_PADRAO);
	}
}