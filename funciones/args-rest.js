"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const name = fullName('Luffy', 'Zoro');
    console.log({ name });
})();
//# sourceMappingURL=args-rest.js.map