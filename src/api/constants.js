import { LCDClient } from '@terra-money/terra.js';

//* Solana constant

export const commitment = 'finalized';
export const preflightCommitment = 'finalized';
export const METAPLEX_PROGRAM_ID = 'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s';

export const isMainnet = true;

// The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
// NOTE: Network switching
export const endpoint = `https://solana-${isMainnet ? 'mainnet' : 'devnet'}.g.alchemy.com/v2/20IdL5kXb_sdZvBR5jqq29Dgb2fnh1lh`;
export const cubeMint = isMainnet ? '3VFDJ6Pm781B5Tv41wDTw9PmRPwPNdq4fWk4C3ZrTbZf' : 'CUW1Kvjpe6XmUEBBDBWGj99oGijttz532rR1piipnQC2';

// Collection mint: GExZS89EX4h3tas9h8zjxznMsEMSRvq7W4jCk5wkWoQe
// NFT mint: CUW1Kvjpe6XmUEBBDBWGj99oGijttz532rR1piipnQC2

export const idlPool = {
	version: '0.1.0',
	name: 'bullclub',
	instructions: [
		{
			name: 'initialize',
			accounts: [
				{
					name: 'boss',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'tesseractMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'bump',
					type: 'u8',
				},
			],
		},
		{
			name: 'updateCubeMint',
			accounts: [
				{
					name: 'boss',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'tesseractMint',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'choice',
					type: 'u8',
				},
			],
		},
		{
			name: 'createBull',
			accounts: [
				{
					name: 'bull',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'boss',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'metadata',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'owner',
					isMut: true,
					isSigner: true,
				},
				{
					name: 'nftMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'systemProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [
				{
					name: 'bump',
					type: 'u8',
				},
				{
					name: 'choice',
					type: 'u8',
				},
				{
					name: 'hasCube',
					type: 'bool',
				},
				{
					name: 'uriTwoD',
					type: 'string',
				},
				{
					name: 'uriThreeD',
					type: 'string',
				},
			],
		},
		{
			name: 'applyCube',
			accounts: [
				{
					name: 'bull',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'boss',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'nftAta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'userTesseract',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'tesseractMint',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nftMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'user',
					isMut: false,
					isSigner: true,
				},
				{
					name: 'tokenProgram',
					isMut: false,
					isSigner: false,
				},
			],
			args: [],
		},
		{
			name: 'switchUri',
			accounts: [
				{
					name: 'bull',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'boss',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'nftAta',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'tokenMetadataProgram',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'metadata',
					isMut: true,
					isSigner: false,
				},
				{
					name: 'nftMint',
					isMut: false,
					isSigner: false,
				},
				{
					name: 'user',
					isMut: false,
					isSigner: true,
				},
			],
			args: [
				{
					name: 'choice',
					type: 'u8',
				},
			],
		},
	],
	accounts: [
		{
			name: 'Boss',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'bump',
						type: 'u8',
					},
					{
						name: 'owner',
						type: 'publicKey',
					},
					{
						name: 'tesseractMint',
						type: 'publicKey',
					},
					{
						name: 'tesseractMintB',
						type: 'publicKey',
					},
					{
						name: 'tesseractMintC',
						type: 'publicKey',
					},
					{
						name: 'tesseractMintD',
						type: 'publicKey',
					},
				],
			},
		},
		{
			name: 'Bull',
			type: {
				kind: 'struct',
				fields: [
					{
						name: 'bump',
						type: 'u8',
					},
					{
						name: 'choice',
						type: 'u8',
					},
					{
						name: 'hasCube',
						type: 'bool',
					},
					{
						name: 'metadata',
						type: 'publicKey',
					},
					{
						name: 'uriTwoD',
						type: 'string',
					},
					{
						name: 'uriThreeD',
						type: 'string',
					},
				],
			},
		},
	],
	errors: [
		{
			code: 6000,
			name: 'MetaLoadingFailed',
			msg: 'Metadata account loading failed!',
		},
		{
			code: 6001,
			name: 'InvalidUriChoice',
			msg: 'No matches for the URI choice!',
		},
		{
			code: 6002,
			name: 'InvalidCubeChoice',
			msg: 'No matches for the tesseract mint choice!',
		},
		{
			code: 6003,
			name: 'NoCube',
			msg: 'The bull has no tesseract!',
		},
		{
			code: 6004,
			name: 'AlreadyHasCube',
			msg: 'The bull already has a tesseract!',
		},
	],
	metadata: {
		address: '5GxHfTey68BkbQi7gTLahT5rdX6BWiHarRAdy8mwyKmk',
	},
};

//* Terra Constants

export const DENOM = {
	UST: 'uusd',
	LUNA: 'uluna',
};

export const DEFAULTS = {
	CURRENCY: 'LUNA',
	WHITELIST_STATUS: null,
	WHITELIST: '1',
	QUANTITY: 1,
	PRICE: 200,
	LOADER_TIMEOUT: 800,
	RESERVATIONS_REFRESH_RATE: 1000 * 15,
	LUNA_REFRESH_RATE: 1000 * 30,
	RANDOMEARTH_LINK: 'https://randomearth.io/collections/terra1934kn7p03ns94htl75zpzsg0n4yvw8yf2746ep',
	STAGES_LEVEL_MAP: {
		STAFF: ['0'],
		STAGES: ['1', '2', '3', '4'],
	},
};

export const CONTRACT = {
	DOMAIN_FCD: 'https://finder.terra.money/columbus-5/tx/',
	MINT_ROUTE: '/store?query_msg=%7B%22tokens%22:%7B%22owner%22:%22terra1m2vmq9tdp8de0he706s8l3vuc28dxrc024rdcn%22,%22limit%22:30,%20%22offset%22:20}}',
	NFT_CUBE_ADDRESS: 'terra1k5pa7htlznr7hskhr9dx8qlk65emhktrgmuknd',
	NFT_ADDRESS_2D: 'terra1trn7mhgc9e2wfkm5mhr65p3eu7a2lc526uwny2',
	NFT_ADDRESS_3D: 'terra18d5cqlsqgxp8w7ysn48l4r8a5328592wfwjtyz',
	MINTER_ADDRESS: 'terra10qst5jvyexqczh0jn5w9acjlnkczk4lnqsnwzc',
	FUSER_ADDRESS: 'terra17qtp3f3xzwruul7tlxys6p2zz3gdsse33cn7gn',
};

export const MAINNET = {
	isClassic: true,
	name: 'mainnet',
	chainID: 'columbus-5',
	URL: 'https://columbus-lcd.terra.dev',
	FCD: 'https://fcd.terra.dev',
	TRANSACTION_URL: 'https://finder.terra.money/columbus-5/tx/',
};

export const TESTNET = {
	URL: 'https://bombay-lcd.terra.dev',
	chainID: 'bombay-12',
	FCD: 'https://bombay-fcd.terra.dev',
	TRANSACTION_URL: 'https://finder.terra.money/testnet/tx/',
};

export const NET = MAINNET;
export const lcdClient = new LCDClient(MAINNET);

export const walletConnectChainIds = {
	0: TESTNET,
	1: MAINNET,
};
