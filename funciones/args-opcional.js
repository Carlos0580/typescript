"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || '---'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
//# sourceMappingURL=args-opcional.js.map