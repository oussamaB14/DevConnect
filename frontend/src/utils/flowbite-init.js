export function initFlowbite() {
    if (typeof window !== 'undefined') {
      import('flowbite').then((flowbite) => {
        flowbite.initFlowbite();
      });
    }
  }