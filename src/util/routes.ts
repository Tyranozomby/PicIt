export type RootStackParamList = {
    Register: undefined;
    Validate: undefined;
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}
