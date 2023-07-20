import { State, StateContext, Selector } from '@ngxs/store';
import { Action } from '@ngxs/store';

// // Services
// import { ThemeService } from 'src/app/services/theme.service';

// Actions
import { SetThemeMode } from './../actions/appState.actions';
interface ThemeStateModel {
    themeMode: 'dark' | 'light';
}
@State<ThemeStateModel>({
    name: 'themeState',
    defaults: {
        themeMode: 'dark',
    }
})
export class ThemeState {
    @Selector()
    static getThemeMode(state: ThemeStateModel) {
        return state.themeMode;
    }

    @Action(SetThemeMode)
    setThemeState({ setState }: StateContext<ThemeStateModel>, {payload}: SetThemeMode) {
        setState({
            themeMode: payload
        });
    }
}
