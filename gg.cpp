public class Booking
    {
    public Booking(int bookingId, int roomId, DateTime? from, DateTime? to)
    {
    BookingId = bookingId; RoomId = roomId; From = from; To = to;
    }
    public int BookingId { get; private set; } 
    public int RoomId { get; private set; } 
    public DateTime? From { get; private set; } 
    public DateTime? To { get; private set; }
}



public class Booking
{
    public Booking(int bookingId, int roomId, DateTime? from, DateTime? to)
    {
        BookingId = bookingId; RoomId = roomId;
         Interval = new Time Interval(from, to);
    }

    public int BookingId { get; private set; } 
    public int RoomId { get; private set; }
}


public class TimeInterval
{
    public TimeInterval(DateTime? from = null, DateTime? to = null)
    {
        From = from; To = to;
    }
    
    public DateTime? From { get; set; } 
    public DateTime? To { get; set; }
}







public enum BirdType
    {
    African, American, European
    }
    
public class Bird
{
    public BirdType Type {get;set;}


    public double GetSpeed()
    {
        switch (Type)
        {
            case African: return 1;
            case American: return 0.7;
            case European: return 1;
            default: return 1;
        }
    }
   
}



public abstract class Bird
{
    public abstract double GetSpeed();
    }

public class AfricanBird : Bird
{
    public override double GetSpeed()
    {
        return 1;
    }
}




public class AmericanBird : Bird
{
    public override double GetSpeed()
    {
        return 0.7;
    }
}

public class EuropeanBird : Bird
{
    public override double GetSpeed()
    {
    return 1;
    }
}

static void Main() {
Bird africanBird = new AfricanBird();
 Bird americanBird = new AmericanBird();
  africanBird.GetSpeed()
   americanBird.GetSpeed()
}