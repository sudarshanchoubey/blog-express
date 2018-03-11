AFRAME.registerComponent('scale-on-mouseenter', {
  schema: {
    to: { default: '2.5 2.5 2.5' }
  },

  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseenter', function () {
      this.setAttribute('scale', data.to);
    });
  }
});
AFRAME.registerComponent('descale-on-mouseleave', {
  schema: {
    to: { default: '1 1 1' }
  },

  init: function () {
    var data = this.data;
    this.el.addEventListener('mouseleave', function () {
      this.setAttribute('scale', data.to);
    });
  }
});
AFRAME.registerComponent('moveleft', {
  tick: function (time, timeDelta) {
    var currentPosition = this.el.object3D.position;
    this.el.setAttribute('position', {
      x: currentPosition.x + (0.4 * timeDelta / 1000),
      y: currentPosition.y,
      z: currentPosition.z
    });
  }
});