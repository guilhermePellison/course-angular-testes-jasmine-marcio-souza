/**
 * Arquivo principal de rotas e navegação da aplicação.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.3
 */

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DemoRoutes } from "./demo";
import { ClienteRoutes } from "./cliente";
import { ClientesRoutes } from "./clientes";

export const routes: Routes = [...DemoRoutes, ...ClienteRoutes, ...ClientesRoutes];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
