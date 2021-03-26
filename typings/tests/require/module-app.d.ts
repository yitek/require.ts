export declare let app: {
    id: number;
    name: string;
    deps: {
        "framework": {
            id: number;
            name: string;
            deps: {
                "lib": {
                    id: number;
                    name: string;
                };
            };
        };
        "component": {
            id: number;
            name: string;
            deps: {
                "framework": {
                    id: number;
                    name: string;
                    deps: {
                        "lib": {
                            id: number;
                            name: string;
                        };
                    };
                };
            };
        };
        "control": {
            id: number;
            name: string;
            deps: {
                "lib": {
                    id: number;
                    name: string;
                };
            };
        };
    };
};
