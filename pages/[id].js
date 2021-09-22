import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      {/* render details about one entity in persons.json saved in itemData */}
      <article className="card col-6">
        <h2>Person Detail</h2>
        <div className="card-body">
        <>
          <h5 className="card-title">{  itemData ?
            itemData.name :null } </h5>
        </>
          <h6 className="card-subtitle mb-2 text-muted">{itemData ?
            itemData.phone :null}</h6>
          <p className="card-text">{itemData ?
            itemData.birthdate :null}</p>
          <a href={'mailto:' + 'itemData ? itemData.email :null' } className="card-link">{itemData ? itemData.email :null}</a>
        </div>
      </article>
      {/* render details about all other entities in persons.json related to id */}
      <div className="list-group col-6">
        {/* check for existence of itemData.related property */}
        {itemData ? 
          <h2>Related Persons</h2>
        :null }
        {itemData && 
          itemData.related.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
            )
          )
          
        }
        {/* using expression ? ... : null */}
      </div>
    </Layout>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      {/* render details about one entity in persons.json saved in itemData */}
      <article className="card col-6">
        <h2>Person Detail</h2>
        <div className="card-body">
        <>
          <h5 className="card-title">{  itemData ?
            itemData.name :null } </h5>
        </>
          <h6 className="card-subtitle mb-2 text-muted">{itemData ?
            itemData.phone :null}</h6>
          <p className="card-text">{itemData ?
            itemData.birthdate :null}</p>
          <a href={'mailto:' + 'itemData ? itemData.email :null' } className="card-link">{itemData ? itemData.email :null}</a>
        </div>
      </article>
      {/* render details about all other entities in persons.json related to id */}
      <div className="list-group col-6">
        {/* check for existence of itemData.related property */}
        {itemData ? 
          <h2>Related Persons</h2>
        :null }
        {itemData ? 
          itemData.related.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
            )
          )
          : null
        }
        {/* using expression ? ... : null */}
      </div>
    </Layout>
  );
}
