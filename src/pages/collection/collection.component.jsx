import React, {useContext} from 'react';
import { connect } from 'react-redux';

//context API
import CollectionsContext from '../../contexts/collections/collections.context'

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const collections= useContext(CollectionsContext)
  const collection=collections[match.params.collectionId]
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default (CollectionPage);
