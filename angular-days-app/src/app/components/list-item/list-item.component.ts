import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: [ './list-item.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {
    @Input() pokemon!: Pokemon;
}
