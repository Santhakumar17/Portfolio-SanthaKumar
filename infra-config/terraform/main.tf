provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "example_sg" {
  name        = "portfolio-santha-security-group"
  description = "Allow SSH, HTTP, and HTTPS inbound, allow all outbound"

  # Inbound rules
  ingress {
    from_port   = 22 # SSH
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"] # Open to all (Use specific IP for more security)
  }

  ingress {
    from_port   = 80 # HTTP
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Outbound rules
  egress {
    from_port   = 0 # Allow all outbound traffic
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "example" {
  ami             = "ami-0e35ddab05955cf57"
  instance_type   = "t2.micro"
  key_name        = "new-key"
  security_groups = [aws_security_group.example_sg.name] # Attach security group

  tags = {
    Name = "portfolio-santha server"
  }
}