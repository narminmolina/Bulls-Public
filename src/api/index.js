import qs from 'qs';
import axios from 'axios';
// import dayjs from 'dayjs';
import sortBy from 'lodash/sortBy';
// import isEmpty from 'lodash/isEmpty';
import groupBy from 'lodash/groupBy';

// import { NET } from 'api/constants';
import { toKebabCase } from 'utils';
// import { microToMacro } from 'utils';

// const COLLECTION_2D = 1;
// const COLLECTION_3D = 2;
// const FUSER_ADDRESS = 'terra17qtp3f3xzwruul7tlxys6p2zz3gdsse33cn7gn';

export const getCollectionItems = async nextPageUrl => {
	const response = await axios.get(nextPageUrl ?? `/nft/?collection=6&limit=500&offset=500`);
	const data = response.data;
	return data;
};

// 	const { data } = await axios.get(nextPageUrl ? nextPageUrl : `/nft/?${query}`);

// 	return data;
// };

export const getTraitTypes = async () => {
	const response = await axios.get(`/trait/?limit=1000&offset=0`);
	const traitTypes = response?.data?.results.map(({ value, trait_type, ...otherProps }) => ({
		name: toKebabCase(`${trait_type} ${value}`),
		id: toKebabCase(`${trait_type} ${value}`),
		label: value,
		value: trait_type,
		...otherProps,
	}));

	// console.log({
	// 	//
	// 	traitTypes,
	// 	groupedBy: groupBy(traitTypes, 'value'),
	// 	ObjectEntries: Object.entries(groupBy(traitTypes, 'value')),
	// 	sortBy: sortBy(Object.entries(groupBy(traitTypes, 'value')), ([key]) => key),
	// });
	const groupedTraitTypes = sortBy(Object.entries(groupBy(traitTypes, 'value')), ([key]) => [key]);

	return groupedTraitTypes;
};

// export const getRecentSales = async ({ search, bonded, ordering, nextPageUrls }) => {
// 	const query = qs.stringify(
// 		{
// 			search,
// 			bonded,
// 			ordering,
// 			collection: COLLECTION_2D,
// 		},
// 		{ arrayFormat: 'repeat', skipNulls: true }
// 	);

// 	const sales = await axios.get(nextPageUrls?.sales ? nextPageUrls.sales : `/trade/?${query}`);
// 	const listings = await axios.get(nextPageUrls?.listings ? nextPageUrls.listings : `/listing/?${query}`);

// 	return {
// 		tableData: {
// 			sales: sales.data.results?.map(({ created_at, img_url, tx_hash, price, token }) => ({
// 				img: img_url,
// 				key: `${tx_hash}-${created_at}-${price}`,
// 				link: token.magiceden_url ?? token.opensea_url,
// 				name: token.name,
// 				price,
// 				rank: token.rank,
// 				// https://hyperspace.xyz/token/{token_address}
// 				// https://magiceden.io/item-details/{token_address}
// 				// https://opensea.io/assets/solana/{token_address}
// 				marketplace: token.magiceden_url ?? token.opensea_url ?? token.hyperspace_url,
// 				date: dayjs(created_at).format('DD/MM/YYYY, HH:mm:ss A'),
// 			})),
// 			listings: listings.data.results?.map(({ listing_time, nft, price }) => ({
// 				img: nft.img_url,
// 				key: `${nft.img_url}-${listing_time}-${price}`,
// 				link: nft.magiceden_url ?? nft.opensea_url,
// 				name: nft.name,
// 				// price: microToMacro(price),
// 				price,
// 				rank: nft.rank,
// 				marketplace: nft.magiceden_url ?? nft.opensea_url,
// 				date: dayjs(listing_time).format('DD/MM/YYYY, HH:mm:ss A'),
// 			})),
// 		},
// 		next: {
// 			sales: sales.data.next,
// 			listings: listings.data.next,
// 		},
// 		count: {
// 			sales: sales.data.count,
// 			listings: listings.data.count,
// 		},
// 	};
// };

// export const getGasPrices = async () => {
// 	const response = await axios.get(`${NET.FCD}/v1/txs/gas_prices`);

// 	return response?.data;
// };
