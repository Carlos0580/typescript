"use strict";
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('FirstName is required');
        }
        return `${firstName} ${lastName}`;
        const name = fullName('Tony', 'Stark');
        console.log({ name });
    };
})();
//# sourceMappingURL=args-opcional.js.map