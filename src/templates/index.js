import bootstrap from '@formio/bootstrap/bootstrap5';

const bootstrap5 = bootstrap.templates.bootstrap5;

// FA4 compatibility: 'fa-move' doesn't exist in FA4; override with 'fa-arrows'.
// Keeps 'bi-arrows-move' for Bootstrap Icons users.
const _originalIconClass = bootstrap5.iconClass;
bootstrap5.iconClass = (iconset, name, spinning) => {
  if (name === 'move' && !spinning) {
    return 'fa fa-arrows bi bi-arrows-move';
  }
  return _originalIconClass(iconset, name, spinning);
};

export default {
  bootstrap: bootstrap5
};
