main<-function(){
args <- commandArgs(TRUE)


speedValue =as.integer(args[2])
distValue =as.integer(args[3])


process <- function(speedValue,distValue) {
  speed <- c(speedValue)
  dist <- c(distValue)
  df <- data.frame(speed,dist)
  return(df)
}

result<-process(speedValue,distValue)


if(as.integer(args[1])==1){
  write.csv(result,file ='C:/Users/이대현/Desktop/CTILab/public/result.csv', append = T ,row.names= F)
}
else{
  write.table(result,file ='C:/Users/이대현/Desktop/CTILab/public/result.csv',sep = ",", append = TRUE, quote = FALSE, 
            col.names = FALSE, row.names = FALSE)
}
}

main()
