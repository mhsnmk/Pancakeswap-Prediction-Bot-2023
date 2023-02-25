const GLOBAL_CONFIG = {
    /**
     * Defines the type of Prediction Game used by the bot (BNB-USDT or CAKE-USDT)
     * @values BNB | CAKE
     * @mandatory
     * @default BNB
     * @type {string}
     */
    PCS_CRYPTO_SELECTED: 'BNB',
     /**
     * Defines the type of betting strategy used by the bot
     * - SIGNAL_STRATEGY: get trading signals from TradingViewScan and use recommended signal for UP or DOWN prediction
     * - QUOTE_STRATEGY: chose the lower or the highiest quote from PCS smart-contract payout quote for UP or DOWN prediction
     * - COPY_TRADING_STRATEGY: copy an address bet operations (Bet Bull or Bet Bear) on PCS game prediction
     * @values SIGNAL_STRATEGY | QUOTE_STRATEGY | COPY_TRADING_STRATEGY
     * @mandatory
     * @default SIGNAL_STRATEGY
     * @type {string}
     */
    SELECTED_STRATEGY: 'COPY_TRADING_STRATEGY',
    /**
     * Flag which enables the automatic claim of bet winnings after each bet won
     * @default true
     * @type {boolean}
     */
    CLAIM_REWARDS: true,
    /**
     * Flag which enables the simulation mode of bot. The bot in simulated mode does not make any transactions towards the smart contracts, 
     * the calculation of the profits/win/loss is performed with a fake balance.
     * @default true
     * @type {boolean}
     */ 
    SIMULATION_MODE: true,
    /**
     * Fake balance used in simulation mode
     * @default 50
     * @type {number}
     */ 
    SIMULATION_BALANCE: 25, // in USD
    /**
     * Calculate the gas fee in simulation mode use this params for estimate gas functions (betBull, betBear, claim)
     * @default 90000
     * @type {number}
     */ 
    SIMULATE_ESTIMATE_GAS: 90000, // Based on 0.5 USD value amount
    /**
     * Time after execute bet strategy when start a new round.
     * @default 265000 in Miliseconds (4.3 Minutes)
     * @type {number}
     */ 
    WAITING_TIME: 265000, 
    BET_CONFIGURATION: {
        BET_AMOUNT: 2, // in USD
        DAILY_GOAL: 10, // in USD
        STOP_LOSS: 7 // in USD
    },
    STRATEGY_CONFIGURATION: {    
        SIGNAL_STRATEGY: {           
            THRESHOLD: 55, // Minimum % of certainty of signals (50 - 100)
            DATASOURCE: "BINANCE" // Datasoure of the trading signals
        },
        QUOTE_STRATEGY: {
            SELECT_LOWER_QUOTE: true // Bet on the lower quote from Pancakeswap prediction       
        },
        COPY_TRADING_STRATEGY: {         
            WALLET_ADDRESS_TO_EMULATE: '0x83E2680C59b3E17b47333e8F2dc8840e00682109' // Emulate the actions of this address on Pancakeswap prediction game
        }
    }
};

module.exports = {
    GLOBAL_CONFIG
};
