import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'hello',
  standalone: true,
  imports: [MatExpansionModule],
  template: `<mat-accordion>
  <mat-expansion-panel
    (opened)="panelOpenState = true"
    (closed)="panelOpenState = false"
  >
    <mat-expansion-panel-header>
      <mat-panel-description>
       Para começar leia atentamente as instruções a seguir:
      </mat-panel-description>
    </mat-expansion-panel-header>
    <ol>
    <li>
    Primeiramente, faça  <b>fork desse projeto</b> para sua conta git hub. Utilize a estrutura do Stackblitz para criar o seu teste técnico. Ao final, envie o link do seu projeto no Stackblitz ao responsável da Montreal que entrou em contato com você.
  </li>
    <li>
      Veja a estrutura de pastas e crie o seu teste na pasta <b>teste-tecnico</b>.
    </li>
    <li>
      Seguindo o padrão MVCS, faça a requisição GET da API:
      <a href="https://viacep.com.br/ws/30160907/json/">https://viacep.com.br/ws/30160907/json/</a>
    </li>
    <li>
      Com o dado objeto, construa um formulário em que todos os campos possam ser
      editados, exceto: <b>'ibge'</b> e <b>'siafi'</b>.
    </li>
    <li>Encontre uma solução de máscara para o campo <b>'cep'</b>, seguindo o padrão <b>00000-000</b>;</li>
    <li>Encontre uma solução de máscara para o campo <b>'complemento'</b>, seguindo o padrão de milhar: <b>0.000</b>;</li>
    <li>Caso um novo valor de <b>'cep'</b> seja inserido/ digitado, uma nova requisição deve ser feita, e o formulário atualizado com os novos dados.</li>
    <li>Construa o método/função que salve as alterações no <b>localstorage</b>;</li>
    <li>O botão de salvar deve ser bloqueado caso todos os campos do formulário <b>não estejam preenchidos</b>;</li>
    <li>Utilize o <b>Angular Material</b> para facilitar o desenvolvimento: https://material.angular.io/</li>
    <li>Caso necessite, guie-se pela documentação do Angular: <a href="https://angular.dev/">https://angular.dev/</a></li>
  </ol>
  </mat-expansion-panel>
</mat-accordion>
`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  panelOpenState: boolean = true;
  @Input() name!: string;
}
