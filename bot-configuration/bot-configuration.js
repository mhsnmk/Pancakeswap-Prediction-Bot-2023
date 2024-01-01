const GLOBAL_CONFIG = {
    /**
     * Defines the type of Prediction Game used by the bot (BNB-USDT or CAKE-USDT)
     * @values BNB | CAKE
     * @mandatory
     * @default BNB
     * @type {string}
     */
    PCS_CRYPTO_SELECTED: 'BNB',
    GAS_PRICE_INCREASE_PERCENTAGE: 22,
    /**
     * Flag which enables the simulation mode of bot. The bot in simulated mode does not make any transactions towards the smart contracts, 
     * the calculation of the profits/win/loss is performed with a fake balance.
     * @default true
     * @type {boolean}
     */
    SIMULATION_MODE: true,
    ANALYTICS_CONFIGURATION: {
        /**
         * Flag which enables to save users activity in history
         * @default false
         * @type {boolean}
         */
        REGISTER_USERS_ACTIVITY: true,
        /**
         * Flag which enables to save all rounds data
         * @default false
         * @type {boolean}
         */
        REGISTER_ALL_ROUNDS_DATA: true,
         /**
         * Flag which enables to save current bot-history data in backup folders e and clean the previus data folders for new bot run cicle
         * @default false
         * @type {boolean}
         */
        RESET_AND_BACKUP_BOT_HISTORY: true
    },
    SIMULATION_CONFIGURATION: {
        /**
        * Fake balance used in simulation mode
        * @default 50
        * @type {number}
        */
        SIMULATION_BALANCE: 5000, // in USD
        /**
         * Calculate the gas fee in simulation mode use this params for estimate gas functions (betBull, betBear, claim)
         * @default 90000
         * @type {number}
         */
        SIMULATE_ESTIMATE_GAS: 90000, // Based on 0.5 USD value amount
    },
    BET_CONFIGURATION: {
        /**
         * Defines the amount to be paid in dollars for each bet
         * @default 1
         * @type {number}
         */
        BET_AMOUNT: 50, // in USD
        /**
         * Defines the daily goal, if is reached the bot will stop
         * @default 50
         * @type {number}
         */
        DAILY_GOAL: 500, // in USD
        /**
         * Defines the stop loss, if is reached the bot will stop
         * @default 50
         * @type {number}
         */
        STOP_LOSS: 1000, // in USD
        MARTINGALE_CONFIG: {
             /**
             * Flag that enabled Martingale/Anti-Martingale bet strategy
             * @default false
             * @type {boolean}
             */
            ACTIVE: true, 
             /**
             * Increment BetAmount after loss if FALSE, Increment BetAmount after Win if TRUE
             * @default false
             * @type {boolean}
             */
            ANTI_MARTINGALE: false, 
             /**
             * INCREMENT_BET_AMOUNT x BET_AMOUNT = NEW BET_AMOUNT after loss or win (based on ANTI_MARTINGALE flag)
             * @default 2
             * @type {number}
             */
            INCREMENT_BET_AMOUNT: 2,
             /**
             * After how many rounds will the suspended rounds be eliminated, because of PancakeSwap can burn/delete some rounds, which will never be completed, remaining in the hanging rounds stack
             * @default 5
             * @type {number}
             */
            NUM_ROUNDS_AFTER_DELETE_PENDING_ROUNDS: 5                    
        }
    },
    STRATEGY_CONFIGURATION: {
        /**
         * Defines the type of betting strategy used by the bot
         * - SIGNAL_STRATEGY: get trading signals from TradingViewScan and use recommended signal for UP or DOWN prediction
         * - QUOTE_STRATEGY: chose the lower or the highiest quote from PCS smart-contract payout quote for UP or DOWN prediction
         * - COPY_TRADING_STRATEGY: copy an address bet operations (Bet Bull or Bet Bear) on PCS game prediction
         * @values SIGNAL_STRATEGY | QUOTE_STRATEGY | COPY_TRADING_STRATEGY | PATTERN_STRATEGY
         * @mandatory
         * @default SIGNAL_STRATEGY
         * @type {string}
         */
        SELECTED_STRATEGY: 'QUOTE_STRATEGY',
        /**
         * Time after execute bet strategy when start a new round.
         * @default 265000 in Miliseconds (4.3 Minutes)
         * @type {number}
         */
        WAITING_TIME: 265000,
        /**
        * Flag which enables the automatic claim of bet winnings after each bet won
        * @default true
        * @type {boolean}
        */
        CLAIM_REWARDS: true,
        SIGNAL_STRATEGY: {
            /**
             * Flag which enables the reverse bet strategy (only for signals) if signals recommend to bet up, the bot bet down
             * @default false
             * @type {boolean}
             */
            REVERSE_BETTING: true,
             /**
             * Defines the minimum percentage threshold of signal accuracy (50% - 100%)
             * @default 55
             * @type {number}
             */
            THRESHOLD: 55,
             /**
             * Datasoure of the trading signals library
             * @default BINANCE
             * @type {string}
             */
            DATASOURCE: "BINANCE"
        },
        QUOTE_STRATEGY: {
             /**
             * Flag which enables to Bet on the lowe or highest quote from Pancakeswap prediction
             * @default false
             * @type {boolean}
             */
            SELECT_LOWER_QUOTE: false       
        },
        COPY_TRADING_STRATEGY: {
             /**
             * Wallet address to emulate, Emulate the actions of this address on Pancakeswap prediction game        
             * @type {string}
             */
            WALLET_ADDRESS_TO_EMULATE: '0xe25E5Db92Ad947c89015f085fD830823F3cF2fB8'
        },
        PATTERN_STRATEGY: {
            /**
            * Defines the number of previous rounds having the same outcome, the bot will bet the next round towards the opposite sign.     
            * @type {number}
            */
           EVENT_PATTERN_NUMBER: 2,
            /**
            * To more accurately predict the outcome of the round that is about to end, a larger price difference will be statistically easier to predict. 
            * So define your threshold and only if respected the correct round will be considered in the pattern. 
            * Example: If when I retrieve the current price and the difference with the opening price is 0.3 or -0.3 it will be more likely to respect the outcome than a difference of 0.003 or -0.003.
            * However, if during the last few seconds the volatility is high, you can increase the WAITING_TIME parameter  
            * @type {number}
            */
           DELTA_PRICE_THRESHOLD: 0.2
       }
    }
};

module.exports = {
    GLOBAL_CONFIG
};
