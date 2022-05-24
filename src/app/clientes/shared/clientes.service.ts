/**
 * Serviço de gerenciamento de clientess.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */
 
import { Injectable } from '@angular/core';

import { Clientes } from './clientes.model';

@Injectable()
export class ClientesService {

	/**
	 * Retorna listagem de todos os clientess.
	 *
	 * @return Clientes[] clientess
	 */
	listarTodos(): Clientes[] {
		var clientess:string = sessionStorage['clientess'];
		return clientess ? JSON.parse(clientess) : [];
	}

	/**
	 * Cadastra um novo clientes.
	 *
	 * @param Clientes clientes
	 */
	cadastrar(clientes: Clientes): void {
		var clientess:Clientes[] = this.listarTodos();
		clientess.push(clientes);
		sessionStorage['clientess'] = JSON.stringify(clientess);
	}

	/**
	 * Retorna os dados de um clientes por id.
	 *
	 * @param number id
	 * @return Usuario clientes
	 */
	buscarPorId(id: number):Clientes {
		var clientess:Clientes[] = this.listarTodos();
		for (let clientes of clientess) {
			if (clientes.id == id) {
				return clientes;
			}
		}

		return new Clientes();
	}

	/**
	 * Atualiza os dados de um clientes.
	 *
	 * @param number id
	 * @param Clientes clientes
	 */
	atualizar(id: number, clientes: Clientes): void {
		var clientess:Clientes[] = this.listarTodos();
		for (var i=0; i<clientess.length; i++) {
			if (clientess[i].id == id) {
				clientess[i] = clientes;
			}
		}

		sessionStorage['clientess'] = JSON.stringify(clientess);
	}

	/**
	 * Remove um clientes.
	 *
	 * @param number id
	 */
	excluir(id: number): void {
		var clientess:Clientes[] = this.listarTodos();
		var clientessFinal:Clientes[] = [];

		for (let clientes of clientess) {
			if (clientes.id != id) {
				clientessFinal.push(clientes);
			}
		}

		sessionStorage['clientess'] = JSON.stringify(clientessFinal);
	}

	/**
	 * Retorna listagem parcial de clientess.
	 *
	 * @param number pagina
	 * @param number qtdPorPagina
	 * @return Clientes[] clientess
	 */
	listarParcial(pagina: number, qtdPorPagina: number): Clientes[] {
		let storage: string = sessionStorage['clientess'];
		let clientess: Clientes[] = storage ? JSON.parse(storage) : [];

		let clientessParcial: Clientes[] = [];
		for (let i = ( pagina * qtdPorPagina ); i < (pagina * qtdPorPagina + qtdPorPagina); i++) {
			if (i >= clientess.length) {
				break;
			}
			clientessParcial.push(clientess[i]);
		}

		return clientessParcial;
	}

	/**
	 * Retorna o total de pessoas.
	 *
	 * @return number total de registros
	 */
	totalRegistros(): number {
		return this.listarTodos().length;
	}
}
