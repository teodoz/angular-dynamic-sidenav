import { SidenavService } from 'src/app/services/sidenav.service';
import { Component, OnInit } from '@angular/core';

export interface EnemyModel {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-enemies',
  templateUrl: './enemies.component.html',
  styleUrls: ['./enemies.component.scss'],
})
export class EnemiesComponent implements OnInit {
  enemies: EnemyModel[] = [
    {
      name: 'Fantasma',
      description:
        'Os fantasmas de New Londo são os espíritos dos antigos moradores, que foram dizimados quando a cidade foi inundada. Eles são seres amaldiçoados, então para interagir com eles você deve se tornar amaldiçoado. Esses tons brancos macabros deslizam e atacam paredes, tetos e pisos. Eles têm longos alcances corpo a corpo e um ataque de agarrar vicioso. Alguns também estão escondidos acima e abaixo de você, e vão esfaqueá-lo quando você passar.',
      image:
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/londo_ghost_concept_art_header1.jpg',
    },
    {
      name: 'Basilisco',
      description:
        'Os basiliscos são criaturas conhecidas por sua capacidade de correr sobre a água, mas a única água que essas criaturas encontram é a sujeira infestada dos esgotos. Seus olhos grandes são sua característica marcante; Curiosamente, no entanto, esses não são seus olhos reais, que são de fato minúsculos, como ilustrado à direita.        Eles não são muito perigosos quando lutados sozinhos, mas o combate pode ser complicado quando em grupo. Causa dano muito baixo, e apenas durante seu ataque de salto, mas eles podem cuspir uma névoa que pode amaldiçoá-lo quando você ficar dentro dele. Quando mortos, há uma chance muito pequena de que eles deixem cair Olhos da Morte que podem ser usados para subir na Aliança do Servo do Senhor do Túmulo.',
      image:
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/basilisk_concept_art_header1.jpg',
    },
    {
      name: 'Esqueleto Feral',
      description:
        'Dimensões semelhantes aos Esqueletos Gigantes, mas de quatro e com um crânio alongado que parece um cruzamento entre humanos e caninos. Não empunha nenhuma arma. Rápido e ágil, com ataque de deslizamento regular e um ataque de flurry extremamente prejudicial.',
      image:
        'https://darksouls.wiki.fextralife.com/file/Dark-Souls/skeleton_beast_enemy_dark_soul.jpg',
    },
  ];

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {}

  showDetail(enemy: EnemyModel) {
    this.sidenavService.setContent(enemy);
    this.sidenavService.open();
  }
}
