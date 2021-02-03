"""create restaurants table

Revision ID: 7fbe2a39fdac
Revises: ffdc0a98111c
Create Date: 2021-02-02 16:03:05.285332

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7fbe2a39fdac'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('restaurants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('description', sa.Text(), nullable=False),
    sa.Column('photo', sa.String(length=100000), nullable=True),
    sa.Column('address', sa.String(length=50), nullable=False),
    sa.Column('city', sa.String(length=50), nullable=False),
    sa.Column('state', sa.String(length=3), nullable=False),
    sa.Column('zip_code', sa.String(length=10), nullable=False),
    sa.Column('long', sa.Float(precision=10, asdecimal=6), nullable=False),
    sa.Column('lat', sa.Float(precision=10, asdecimal=6), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('restaurants')
    # ### end Alembic commands ###
