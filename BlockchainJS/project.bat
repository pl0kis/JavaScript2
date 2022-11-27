start geth --datadir ./ --networkid 1547 --http --http.api "personal,web3,net,eth" --http.corsdomain "*" --allow-insecure-unlock
start geth attach --exec miner.start(1)
start live-server ./