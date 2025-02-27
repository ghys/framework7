import Utils from '../utils/utils';
import Mixins from '../utils/mixins';

export default {
  name: 'f7-list-group',
  props: {
    id: [String, Number],
    className: String, // phenome-react-line
    style: Object, // phenome-react-line
    mediaList: Boolean,
    sortable: Boolean,
    sortableTapHold: Boolean,
    sortableMoveElements: {
      type: Boolean,
      default: undefined,
    },
    ...Mixins.colorProps,
  },
  render() {
    const self = this;
    const props = self.props;
    const {
      className,
      id,
      style,
      mediaList,
      sortable,
      sortableMoveElements,
    } = props;

    const classes = Utils.classNames(
      className,
      'list-group',
      {
        'media-list': mediaList,
        sortable,
        'sortable-tap-hold': sortableTapHold,
      },
      Mixins.colorClasses(props),
    );

    return (
      <div id={id} style={style} className={classes} data-sortable-move-elements={typeof sortableMoveElements !== 'undefined' ? sortableMoveElements.toString() : undefined}>
        <ul>
          <slot />
        </ul>
      </div>
    );
  },
};
